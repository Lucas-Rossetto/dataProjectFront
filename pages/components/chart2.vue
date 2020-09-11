<script>
import { Line, mixins } from "vue-chartjs";
import axios from "axios";

export default {
  name: "chart2",
  mixins: [mixins.reactiveData],
  data() {
    return {
      chartData: "",
    };
  },
  extends: Line,
  mounted() {
    //

    //
    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "aout",
      ], // nombre d'années
      datasets: [
        {
          label: ["VERSAILLE"], // Label de l'académie
          backgroundColor: ["pink"],
          data: [40, 39, 10, 40, 39, 40, 50], //résultat du pourcentage d'obtention du bac sur x années
        },
        {
          label: ["data deux"],
          backgroundColor: ["blue"],
          data: [50, 30, 10, 50, 40, 70, 30],
        },
      ],
    });
  },
  /*created() {
    /*axios
      .get("http://foussier-printer.ddns.net/academies/")
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);
        this.chartData = {};
        for (let element in responseData) {
          let academie = responseData[element].academie;
          for (let reussite in responseData[element].reussiteannee_set) {
            let annee = responseData[element].reussiteannee_set[reussite].annee;
            let pourcentageGeneral =
              responseData[element].reussiteannee_set[reussite]
                .pourcentageGeneral;
            //console.log(academie);
            //console.log(annee);
            //console.log(pourcentageGeneral);

  },*/
  methods: {
    addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
      });
      chart.update();
    },
  },
};
</script>
