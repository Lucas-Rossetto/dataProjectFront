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
    this.renderChart(this.chartData);
  },
  created() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        const responseData = response.data;
        this.chartData = {
          labels: responseData.map((item) => item.annee),
          datasets: [
            {
              label: "VERSAILLES",
              backgroundColor: "yellow",
              data: responseData.map((item) => item.pourcentageGarcon),
            },
            {
              label: "CRETEIL",
              backgroundColor: "red",
              data: responseData.map((item) => item.pourcentageFilles),
            },
            {
              label: "LILLE",
              backgroundColor: "blue",
              data: responseData.map((item) => item.pourcentageGeneral),
            },
            {
              label: "NANTES",
              backgroundColor: "green",
              data: responseData.map((item) => item.pourcentageGeneral),
            },
            {
              label: "RENNES",
              backgroundColor: "purple",
              data: responseData.map((item) => item.pourcentageGeneral),
            },
            {
              label: "GRENOBLE",
              backgroundColor: "black",
              data: responseData.map((item) => item.pourcentageGeneral),
            },
            {
              label: "LYON",
              backgroundColor: "orange",
              data: responseData.map((item) => item.pourcentageGeneral),
            },
            {
              label: "PARIS",
              backgroundColor: "pink",
              data: responseData.map((item) => item.pourcentageGeneral),
            },
          ],
        };
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
