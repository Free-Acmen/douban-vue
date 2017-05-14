import MovieDetail from '../../pages/movieDetail'
import store from '../../store'
import type from '../../store/mutation-type'
import {currentMovie} from '../../store/data'

export default {
    path: '/moviedetail/:movieId',
    component: MovieDetail,
    beforeEnter: function(to, from, next){
        if(Object.keys(store.state.movieDetail.movieDetailData).length !== 0){
           store.commit(type.LOADING_FLAG, false) 
           next()
           return 
        }
        const movieId = to.params.movieId
        currentMovie(movieId).then((movieDetailData) => {
            store.commit(type.CURRENT_MOVIE, movieDetailData)
            store.commit(type.NET_STATUS, '')
            store.commit(type.LOADING_FLAG, false)
        }).catch((err) => {
            store.commit(type.NET_STATUS, err)
            store.commit(type.LOADING_FLAG, false)
        })
        next()
    } 
}