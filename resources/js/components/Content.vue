<template>
  <div>
    <tr>
      <th>ชนิดทอง</th>
      <th>น้ำหนักทอง</th>
      <th>ลักษณะทอง</th>
      <th>จำนวนที่ขอเบิก</th>
      <th>เลือก</th>
    </tr>

    <tr v-for="item in list">
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

    <br>
    <br>
    <tr>
      <th>ชนิดทอง</th>
      <th>น้ำหนักทอง</th>
      <th>ลักษณะทอง</th>
      <th>จำนวนที่ขอเบิก</th>
      <th>เลือก</th>
    </tr>

    <tr v-for="(item, index) in listitem">
      <td>{{item.golds}}</td>
      <td>{{item.kgs}}</td>
      <td>{{item.attribuils}}</td>
      <td>{{item.a}}</td>
      <td>
        <Button v-on:click="removeList(index)">delete</Button>
      </td>
    </tr>
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
th {
  padding-right: 40px;
}
</style>




