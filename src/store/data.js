import {server, apikey} from './serverConfig'

export const ajax = url => new Promise((resolve, reject) => {
    // Vue.http.get(url).then((response)=>{
    //     resolve(response)
    // })
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {    
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(`错误: ${xhr.status}`)
            }
        }
    }
})

//影院热映
export const hotMovie = (count, start) => {
    return ajax(`/v2/movie/in_theaters?apikey=${apikey}&count=${count}&start=${start}`)
}

//即将上映
export const commingSoon = (count, start) => ajax(`/v2/movie/coming_soon?apikey=${apikey}&count=${count}&start=${start}`)
   
//top250
export const top250 = (count, start) => {
    return ajax(`/v2/movie/top250?apikey=${apikey}&count=${count}&start=${start}`)
}

//北美票房
export const usBox = (count, start) => {
    return ajax(`/v2/movie/us_box?apikey=${apikey}&count=${count}&start=${start}`)
}

// 口碑榜
export const weekly = (count, start) => ajax(`${server}/v2/movie/weekly?apikey=${apikey}&count=${count}&start=${start}`)

// 新片榜
export const newMovies = (count, start) => ajax(`${server}/v2/movie/new_movies?apikey=${apikey}&count=${count}&start=${start}`)

//当前电影详情
export const currentMovie = currentMovieId => {
    return ajax(`/v2/movie/subject/${currentMovieId}?apikey=${apikey}`)
}

 // 当前电影短评信息(reviews  comments)
export const reviews = (movieId, count, start) => ajax(`${server}/v2/movie/subject/${movieId}/comments?apikey=${apikey}&count=${count}&start=${start}`)

//当前标签详情
export const getTagData = (tag, count, start) => {
    return ajax(`/v2/movie/search?apikey=${apikey}&tag=${tag}count=${count}&start=${start}`)
}