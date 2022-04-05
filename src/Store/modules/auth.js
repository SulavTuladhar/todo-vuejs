import httpClient from "@/API/httpClient"

export default{
    namespaced: true,
    state: {
        accessToken: null,
        isLoggedIn: false
    },
    mutations:{
        updateAccessToken(state,payload){
            state.accessToken = payload
        },
        isLoggedIn(state,payload){
            state.isLoggedIn = payload
        }
    },
    actions: {
        login({commit},data){
            return new Promise((resolve,reject) => {
                httpClient.POST('/auth/login',data)
                    .then(res=>{
                        localStorage.setItem('token', res.data.access_token);
                        localStorage.setItem('user', res.data.username)
                        commit('updateAccessToken', res.data.access_token)
                        if(res.status == 200){
                            resolve(true)
                        }
                    })    
                    .catch(err=>{
                        console.log('error while logging in >>', err);
                        reject(err)
                    })
            })
               
            
        }
    }
}