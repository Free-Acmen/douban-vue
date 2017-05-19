<template>
    <dl class='m-reviews'>
        <dt><img v-lazy = 'reviewItem.author.avatar' alt="用户图像"></dt>
        <dd>
            <h3>
                {{reviewItem.author.name}}
                <m-star class='star' :average='average' :length='0.7'></m-star>
            </h3>
            <div>{{reviewItem.created_at}}</div>
            <p>{{reviewItem.content}}</p>
        </dd>	    
    </dl>
</template>

<script>
    import mStar from './star'
    export default{
        data(){
            return {

            }
        },
        props: ['reviewItem'],
        computed: {
            average(){
                const { value, max } = this.reviewItem.rating;
                return (value / max * 10)
            }
        },
        components: {
            mStar
        }
    }
</script>

<style lang='scss' scoped>
    .m-reviews{
        padding: .5rem 0;
        dt{
            width: 18%;
            float: left;
            border-radius: 50%;
            overflow: hidden;
            margin-right: .5rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
            h3{
                font-size: .8rem;
                padding: .4rem 0;
                .star{
                    display: inline-block;
                }
            }
            p{
                padding: .4rem 0 .4rem 22%;
                font-size: .7rem;
                line-height: 1rem;
            }
        }
    }
</style>