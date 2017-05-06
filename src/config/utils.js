
//获取css样式方法
export const getStyle = function(elem, attr, numMode = 'init'){
    let  target
    if(attr === 'scrollTop'){
        target = elem.scrollTop
    }else if(elem.currentStyle){
        target = elem.currentStyle[attr]
    }else{
        target = doucument.defaultView.getComputedStyle(elem, null)[attr]
    }
    return numMode == 'float' ? parseFloat(target) : parseInt(target)
}

//到指定位置加载
export const loadMore = (elem, callback) => {
    let windowHeight = window.screen.height
    let height
    let setTop
    let paddingBottom
    let marginBottom
    let requestFram
    let oldScrollTop

    document.body.addEventListener('scroll', () => {
        loadMore()
    },{passive: false})

    elem.addEventListener('touchstart', () =>　{
        height = elem.offsetHeight
        setTop = elem.offsetTop
        paddingBottom = getStyle(elem, 'paddingBottom')
        marginBottom = getStyle(elem, 'marginBottom')
    }, {passive: true})

    elem.addEventListener('touchmove', () => {
        loadMore()
        console.log('moving')
    }, {passive: true})

    elem.addEventListener('touchend', () => {
        oldScrollTop = document.body.scrollTop
        moveEnd()
    }, {passive: true})

    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if(document.body.scrollTop != oldScrollTop){
                oldScrollTop = document.body.scrollTop
                loadMore()
                moveEnd()
            }else{
                cancelAnimationFrame(requestFram)
                height = elem.offsetHeight
                loadMore()
            }
        })
    }

    const loadMore = () => {
        if(document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom){
            callback()
        }
    }
}


