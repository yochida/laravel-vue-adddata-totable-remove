<template>
  <div class="main">
    <div class="content-lefth">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>ชนิดทอง</th>
            <th>น้ำหนักทอง</th>
            <th>ลักษณะทอง</th>
            <th>จำนวนที่ขอเบิก</th>
            <th>เลือก</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list">
            <td>{{index}}</td>
            <td>{{item.gold}}</td>
            <td>{{item.kg}}</td>
            <td>{{item.attribuil}}</td>
            <td>
              <input type="text" id="minput" v-model="item.amount">
            </td>
            <td>
              <Button v-on:click="getList(item)">select</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="content-rigth">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th>#</th>
            <th>ชนิดทอง</th>
            <th>น้ำหนักทอง</th>
            <th>ลักษณะทอง</th>
            <th>จำนวนที่ขอเบิก</th>
            <th>เลือก</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listitem">
            <td>{{index}}</td>
            <td>{{item.golds}}</td>
            <td>{{item.kgs}}</td>
            <td>{{item.attribuils}}</td>
            <td>{{item.a}}</td>
            <td>
              <Button v-on:click="removeList(index)">delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      amount: 0,
      listitem: []
    };
  },
  methods: {
    addList: function() {
      this.list = [
        { gold: "กำไล", kg: "0.6 กรัม", attribuil: "โปร่ง" },
        { gold: "ข้อเท้า", kg: "0.6 กรัม", attribuil: "ตัน" },
        { gold: "กำไล", kg: "0.6 กรัม", attribuil: "โปร่ง" },
        { gold: "ข้อเท้า", kg: "0.6 กรัม", attribuil: "ตัน" },
        { gold: "กำไล", kg: "0.6 กรัม", attribuil: "โปร่ง" }
      ];
    },
    getList: function(item) {
      this.listitem.push({
        golds: item.gold,
        kgs: item.kg,
        attribuils: item.attribuil,
        a: item.amount
      });
      console.log(this.listitem);
    },
    removeList: function(i) {
      var re = this.listitem.splice(i, 1);
      console.log(this.listitem);
    }
  },
  created() {
    this.addList();
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  padding: 20px;
}

.content-lefth {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding: 20px;
}

.content-rigth {
  margin-left: 50%;
  height: 100%;
  padding: 20px;
}
</style>




