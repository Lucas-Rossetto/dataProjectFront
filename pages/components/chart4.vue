<script>
import { Line, mixins } from "vue-chartjs";
import axios from "axios";

export default {
  name: "chart4",
  mixins: [mixins.reactiveData],
  data() {
    return {
      chartData: "",
      options: {
        //maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0,
          },
        },
        type: "line",
      },
    };
  },
  extends: Line,
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  created() {
    let data = [];
    let labelData = [];
    let color = [
      "black",
      "pink",
      "red",
      "blue",
      "yellow",
      "orange",
      "purple",
      "green",
    ];
    let compteur = 0;
    axios
      .get("http://foussier-printer.ddns.net/academies/")
      .then((response) => {
        const responseData = response.data;
        for (let element in responseData) {
          let academie = responseData[element].academie;
          let valueData = [];
          labelData = [];
          for (let reussite in responseData[element].reussiteannee_set) {
            let annee = responseData[element].reussiteannee_set[reussite].annee;
            let pourcentageL =
              responseData[element].reussiteannee_set[reussite].pourcentageL;
            valueData.push(pourcentageL);
            labelData.push(annee);
          }
          data.push({
            label: academie,
            borderColor: color[compteur],
            data: valueData,
            fill: false,
          });
          compteur = compteur + 1;
        }
        this.chartData = {
          labels: labelData,
          datasets: data,
        };
      });
  },
};
</script>
