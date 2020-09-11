<template>
  <div>
    <b-tabs>
      <div>
        <b-tab title="Brevet">
          <h2 class="center">
            Taux d'obtention du diplôme national du brevet - Toutes filiaires
          </h2>
          <chart-one></chart-one>
        </b-tab>
      </div>
      <div>
        <b-tab title="Bac">
          <h2 class="center">
            Taux de réussite moyen du baccalauréat général des principales
            académies
          </h2>
          <chart-two></chart-two>
        </b-tab>
      </div>
      <div>
        <b-tab title="Bac ES">
          <h2 class="center">
            Taux de réussite moyen du baccalauréat général filière ES des
            principales académies
          </h2>
          <chart-three></chart-three>
        </b-tab>
      </div>
      <div>
        <b-tab title="Bac L">
          <h2 class="center">
            Taux de réussite moyen du baccalauréat général filière L des
            principales académies
          </h2>
          <chart-four></chart-four>
        </b-tab>
      </div>
      <div>
        <b-tab title="Bac S">
          <h2 class="center">
            Taux de réussite moyen du baccalauréat général filière S des
            principales académies
          </h2>
          <chart-five></chart-five>
        </b-tab>
      </div>
    </b-tabs>
  </div>
</template>

<script>
import ChartOne from "./components/chart";
import ChartTwo from "./components/chart2";
import ChartThree from "./components/chart3";
import ChartFour from "./components/chart4";
import ChartFive from "./components/chart5";

export default {
  components: { ChartOne, ChartTwo, ChartThree, ChartFour, ChartFive },
};
</script>
<style scoped>
.center {
  text-align: center;
}
</style>
