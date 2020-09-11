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
    </b-tabs>
  </div>
</template>

<script>
import ChartOne from "./components/chart";
import ChartTwo from "./components/chart2";

export default {
  components: { ChartOne, ChartTwo },
};
</script>
<style scoped>
.center {
  text-align: center;
}
</style>
