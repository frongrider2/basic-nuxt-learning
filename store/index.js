import Vuex from "vuex";
import axios from "axios";
import env from "@/plugins/env";

const createStore = () => {
  return new Vuex.Store({
    state: {
      // ข้อมูล
      loadData: [],
    },
    mutations: {
      // จัดการข้อมูลใน state
      setPostState(state, posts) {
        state.loadData = posts;
      },
      addPostState(state, post) {
        state.loadData.push(post);
      },
    },
    actions: {
      // ทำงานกับ backend เรียกใช้ผ่าน components
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(`${env.baseUrl}/posts.json`)
          .then((res) => {
            const data = [];
            console.log(res.data);
            for (const key in res.data) {
              data.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPostState", data);
          })
          .catch((err) => context.error(err));
      },
      addPost(vuexContext, value) {
        const createPost = { ...value };
        axios.post(`${env.baseUrl}/posts.json`, createPost).then((res) => {
          vuexContext.commit("addPostState", {
            ...createPost,
            id: res.data.name,
          });
        });
      },
    },
    getters: {
      getAllPost(state) {
        return state.loadData;
      },
    },
  });
};

export default createStore;
