<template>
  <Page xmlns="http://www.nativescript.org/tns.xsd">
    <ActionBar>
      <Label text="Pas du coup"/>
    </ActionBar>

    <FlexboxLayout flexDirection="column" justifyContent="space-evenly">
      <FlexboxLayout flexDirection="column" flexGrow="1">
        <FlexboxLayout flexDirection="row" justifyContent="space-between"  v-for="player in challenge.players" class="player" :key="player.id">
          <Label :text="player.name" class="player-name" flexGrow="4"/>
          <Label :text="player.score" class="player-score" textAlignment="center" order="3"/>
          <Button class="report-button" backgroundColor="#43B3F4" order="2" :playerId="player.id" @tap="reportPlayer">
            <FormattedString>
              <Label class="far" text.decode="&#xf024;" />
            </FormattedString>
          </Button>
        </FlexboxLayout>
      </FlexboxLayout>
    </FlexboxLayout>

  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import {FormattedString} from "@nativescript/core";

export default Vue.extend({
  props: {
    /** @type Challenge */
    challenge: {
      required: true
    }
  },
  data() {
    return {
      challenge: this.$props.challenge as Challenge
    }
  },
  methods: {
    reportPlayer(args: any) {
      const player = this.challenge.players.find((player: any) => player.id === args.object.playerId);

      if (player) {
        player.score++;
      }
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
    font-size: 50;
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
  border-radius: 50%;
}
</style>
