<template>
  <!-- 此為畫面呈現，無需修改 -->
  <div id="main" class="d-flex justify-center align-center">
    <v-container>
      <!-- 標題 -->
      <v-row>
        <v-col cols="12" class="text-center"><h1>Vue.js + Axios</h1></v-col>
      </v-row>
      <!-- 審核框 -->
      <v-row>
        <!-- GET -->
        <v-col md="3" cols="12">
          <v-card min-height="200px">
            <!-- 測試結果 -->
            <div class="d-flex flex-column align-center">
              <h4 class="mt-2">GET</h4>
              <v-avatar
                :color="getSuccess ? 'point' : 'error'"
                size="70"
                class="mt-3"
              >
                <v-icon dark>
                  {{ getSuccess ? "mdi-check-bold" : "mdi-close" }}</v-icon
                >
              </v-avatar>
              <small class="mt-2">{{
                getSuccess ? "操作成功" : "操作失敗"
              }}</small>
            </div>
            <!-- Request -->
            <div class="pb-3" v-if="Object.keys(getReq).length">
              <v-divider class="my-3 mx-8"></v-divider>
              <p class="text-center">Request</p>
              <v-alert
                dense
                :type="getSuccess ? 'success' : 'error'"
                text
                class="ma-3"
                >[{{ getReq["returnCode"] }}]:{{
                  getReq["returnMessage"]
                }}</v-alert
              >
              <ul class="px-8">
                <template v-for="(req, i) in getReq['data']">
                  <li v-if="i !== 'method'" :key="i">
                    {{ i }}
                    <ul>
                      <li v-for="(sonReq, son_i) in req" :key="son_i">
                        {{ son_i }}:<strong>{{ sonReq }}</strong>
                      </li>
                    </ul>
                  </li>
                </template>
              </ul>
            </div>
          </v-card>
        </v-col>

        <!-- POST -->
        <v-col md="3" cols="12">
          <v-card min-height="200px">
            <!-- 測試結果 -->
            <div class="d-flex flex-column align-center">
              <h4 class="mt-2">POST</h4>
              <v-avatar
                :color="postSuccess ? 'point' : 'error'"
                size="70"
                class="mt-3"
              >
                <v-icon dark>
                  {{ postSuccess ? "mdi-check-bold" : "mdi-close" }}</v-icon
                >
              </v-avatar>
              <small class="mt-2">{{
                postSuccess ? "操作成功" : "操作失敗"
              }}</small>
            </div>
            <!-- Request -->
            <div class="pb-3" v-if="Object.keys(postReq).length">
              <v-divider class="my-3 mx-8"></v-divider>
              <p class="text-center">Request</p>
              <v-alert
                dense
                :type="postSuccess ? 'success' : 'error'"
                text
                class="ma-3"
                >[{{ postReq["returnCode"] }}]:{{
                  postReq["returnMessage"]
                }}</v-alert
              >
              <ul class="px-8">
                <template v-for="(req, i) in postReq['data']">
                  <li v-if="i !== 'method'" :key="i">
                    {{ i }}
                    <ul>
                      <li v-for="(sonReq, son_i) in req" :key="son_i">
                        {{ son_i }}:<strong>{{ sonReq }}</strong>
                      </li>
                    </ul>
                  </li>
                </template>
              </ul>
            </div>
          </v-card>
        </v-col>

        <!-- PUT -->
        <v-col md="3" cols="12">
          <v-card min-height="200px">
            <!-- 測試結果 -->
            <div class="d-flex flex-column align-center">
              <h4 class="mt-2">PUT</h4>
              <v-avatar
                :color="putSuccess ? 'point' : 'error'"
                size="70"
                class="mt-3"
              >
                <v-icon dark>
                  {{ putSuccess ? "mdi-check-bold" : "mdi-close" }}</v-icon
                >
              </v-avatar>
              <small class="mt-2">{{
                putSuccess ? "操作成功" : "操作失敗"
              }}</small>
            </div>
            <!-- Request -->
            <div class="pb-3" v-if="Object.keys(putReq).length">
              <v-divider class="my-3 mx-8"></v-divider>
              <p class="text-center">Request</p>
              <v-alert
                dense
                :type="putSuccess ? 'success' : 'error'"
                text
                class="ma-3"
                >[{{ putReq["returnCode"] }}]:{{
                  putReq["returnMessage"]
                }}</v-alert
              >
              <ul class="px-8">
                <template v-for="(req, i) in putReq['data']">
                  <li v-if="i !== 'method'" :key="i">
                    {{ i }}
                    <ul>
                      <li v-for="(sonReq, son_i) in req" :key="son_i">
                        {{ son_i }}:<strong>{{ sonReq }}</strong>
                      </li>
                    </ul>
                  </li>
                </template>
              </ul>
            </div>
          </v-card>
        </v-col>

        <!-- DELETE -->
        <v-col md="3" cols="12">
          <v-card min-height="200px">
            <!-- 測試結果 -->
            <div class="d-flex flex-column align-center">
              <h4 class="mt-2">DELETE</h4>
              <v-avatar
                :color="deleteSuccess ? 'point' : 'error'"
                size="70"
                class="mt-3"
              >
                <v-icon dark>
                  {{ deleteSuccess ? "mdi-check-bold" : "mdi-close" }}</v-icon
                >
              </v-avatar>
              <small class="mt-2">{{
                deleteSuccess ? "操作成功" : "操作失敗"
              }}</small>
            </div>
            <!-- Request -->
            <div class="pb-3" v-if="Object.keys(deleteReq).length">
              <v-divider class="my-3 mx-8"></v-divider>
              <p class="text-center">Request</p>
              <v-alert
                dense
                :type="deleteSuccess ? 'success' : 'error'"
                text
                class="ma-3"
                >[{{ deleteReq["returnCode"] }}]:{{
                  deleteReq["returnMessage"]
                }}</v-alert
              >
              <ul class="px-8">
                <template v-for="(req, i) in deleteReq['data']">
                  <li v-if="i !== 'method'" :key="i">
                    {{ i }}
                    <ul>
                      <li v-for="(sonReq, son_i) in req" :key="son_i">
                        {{ son_i }}:<strong>{{ sonReq }}</strong>
                      </li>
                    </ul>
                  </li>
                </template>
              </ul>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- 重新連接 -->
      <v-row>
        <v-col class="text-center" cols="12">
          <v-btn class="point white--text" large @click="setDefault()"
            >重新測試連接</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- 此為畫面呈現，無需修改 -->
</template>
<script>
export default {
  created() {
    this.setDefault();
  },
  data() {
    return {
      getReq: {},
      postReq: {},
      putReq: {},
      deleteReq: {},

      getSuccess: false,
      postSuccess: false,
      putSuccess: false,
      deleteSuccess: false,
    };
  },
  methods: {
    /**
     * setDefault為預設操作，無需修改。
     */
    async setDefault() {
      await this.getConnect();
      await this.postConnect();
      await this.putConnect();
      await this.deleteConnect();
    },

    // GET
    async getConnect() {
      const res = ""; //API回傳接口

      // 以下為程式回應判斷，無需修改。
      if (res.status === 200) {
        const { data, returnCode, returnMessage } = res["data"] || {};
        if (data["method"].toUpperCase() === "GET") {
          this.getReq = { returnCode, returnMessage, data };
          if (returnCode === "0000") {
            this.getSuccess = true;
            return;
          }
          this.getSuccess = false;
          return;
        }
        this.getReq = { returnCode: "9999", returnMessage: "API Methods錯誤" };
        this.getSuccess = false;
        return;
      }
      this.getSuccess = false;
      return;
    },

    // POST
    async postConnect() {
      const res = ""; //API回傳接口

      // 以下為程式回應判斷，無需修改。
      if (res.status === 200) {
        const { data, returnCode, returnMessage } = res["data"] || {};
        if (data["method"].toUpperCase() === "POST") {
          this.postReq = { returnCode, returnMessage, data };
          if (returnCode === "0000") {
            this.postSuccess = true;
            return;
          }
          this.postSuccess = false;
          return;
        }
        this.postReq = { returnCode: "9999", returnMessage: "API Methods錯誤" };
        this.postSuccess = false;
        return;
      }
      this.postSuccess = false;
      return;
    },

    // PUT
    async putConnect() {
      const res = ""; //API回傳接口

      // 以下為程式回應判斷，無需修改。
      if (res.status === 200) {
        const { data, returnCode, returnMessage } = res["data"] || {};
        if (data["method"].toUpperCase() === "PUT") {
          this.putReq = { returnCode, returnMessage, data };
          if (returnCode === "0000") {
            this.putSuccess = true;
            return;
          }
          this.putSuccess = false;
          return;
        }
        this.putReq = { returnCode: "9999", returnMessage: "API Methods錯誤" };
        this.putSuccess = false;
        return;
      }
      this.putSuccess = false;
      return;
    },

    // DELETE
    async deleteConnect() {
      const res = ""; //API回傳接口

      // 以下為程式回應判斷，無需修改。
      if (res.status === 200) {
        const { data, returnCode, returnMessage } = res["data"] || {};
        if (data["method"].toUpperCase() === "DELETE") {
          this.deleteReq = { returnCode, returnMessage, data };
          if (returnCode === "0000") {
            this.deleteSuccess = true;
            return;
          }
          this.deleteSuccess = false;
          return;
        }
        this.deleteReq = {
          returnCode: "9999",
          returnMessage: "API Methods錯誤",
        };
        this.deleteSuccess = false;
        return;
      }
      this.deleteSuccess = false;
      return;
    },
  },
};
</script>