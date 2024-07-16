<template>
  <Page>
    <ActionBar>
      <Label text="Pas du coup"/>
    </ActionBar>

    <FlexboxLayout flexDirection="column" justifyContent="space-evenly">
      <FlexboxLayout flexDirection="column" flexGrow="1">
        <FlexboxLayout flexDirection="row" justifyContent="space-between"  v-for="player in players" class="player" :backgroundColor="player.color">
          <Label :text="player.text" class="player-name"/>
          <Label :text="player.score" class="player-score"/>
        </FlexboxLayout>
      </FlexboxLayout>

      <FlexboxLayout flexDirection="row" justifyContent="flex-end">
        <Button class="report-button">
          <FormattedString>
            <Label class="far" text.decode="&#xf024;" />
          </FormattedString>
        </Button>
      </FlexboxLayout>
    </FlexboxLayout>

  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
  data() {
    return {
      players: [
          {
            text: "Jean Michel",
            color: "#43B3F4",
            score: 5
          },
          {
            text: "Séverine",
            color: "#075B88",
            score: 2
          },
          {
            text: "Karim",
            color: "#1089CA",
            score: 3
          }
      ]
    };
  },
  computed: {
    message() {
      return "Coucou";
    }
  }
});
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
  @include colorize($color: accent);
}

.player {
  width: 100%;
  margin: 10rem;
  padding: 10 20;
  border-radius: 15rem;


  .player-name {
    font-size: 20px;
  }

  .player-score {
    margin: 0 10rem;
    font-size: 30px;
    font-weight: bold;
  }

  .player-button {

    font-size: 25px;
    font-weight: bold;
  }
}

.report-button {
  padding: 20 30;
  font-size: 20px;
  font-weight: bold;
  background-color: orange;
  border-radius: 50%;
}
</style>
