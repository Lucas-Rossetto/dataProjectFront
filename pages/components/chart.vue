<script>
import { Bar, mixins } from "vue-chartjs";
import axios from "axios";

export default {
  name: "chart",
  mixins: [mixins.reactiveData],
  data() {
    return {
      chartData: "",
      options: {
        tooltips: {
          enabled: true,
          callbacks: {
            label: function(tooltipItems, data) {
              return tooltipItems.yLabel + "%";
            },
          },
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  extends: Bar,
  mounted() {
    this.renderChart(this.chartData, this.options);
  },

  created() {
    axios
      .get("http://foussier-printer.ddns.net/dnbanneereussitees/", {
        headers: {},
      })
      .then((response) => {
        const responseData = response.data;
        this.chartData = {
          labels: responseData.map((item) => item.annee),
          datasets: [
            {
              label: "homme",
              backgroundColor: "blue",
              data: responseData.map((item) => item.pourcentageGarcon),
            },
            {
              label: "femme",
              backgroundColor: "pink",
              data: responseData.map((item) => item.pourcentageFilles),
            },
            {
              label: "moyenne",
              backgroundColor: "black",
              data: responseData.map((item) => item.pourcentageGeneral),
            },
          ],
        };
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    getRandomColor() {
      var letters = "0123456789ABCDEF".split("");
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
};
</script>
