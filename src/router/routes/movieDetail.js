import MovieDetail from '../../pages/movieDetail'
import store from '../../store'
import type from '../../store/mutation-type'
import {currentMovie, reviews} from '../../store/data'

export default {
    path: '/moviedetail/:movieId',
    component: MovieDetail,
    beforeEnter: function(to, from, next){
        store.commit(type.LOADING_FLAG, true)
        const movieId = to.params.movieId
        currentMovie(movieId).then((movieDetailData) => {
            console.log(movieDetailData)
            store.commit(type.CURRENT_MOVIE, movieDetailData)
            store.commit(type.NET_STATUS, '')
            store.commit(type.LOADING_FLAG, false)
        }).catch((err) => {
            store.commit(type.NET_STATUS, err)
            store.commit(type.LOADING_FLAG, false)
        })

        reviews(movieId, 6, 0).then((reviewsData) => {
            console.log(reviewsData)
            store.commit(type.REVIEWS, reviewsData)
        }).catch((err) => {
            console.log(err)
        })
        next()
    } 
}