<template>
  <Page xmlns="http://www.nativescript.org/tns.xsd">

    <ActionBar title="Nouveau challenge">
        <!-- explicitly hide the back button -->
      <NavigationButton visibility="collapsed"/>
    </ActionBar>

    <FlexboxLayout class="container" flexDirection="column" justifyContent="flex-start" alignContent="stretch" alignItems="flex-start" padding="20">

      <Label text="Nom du challenge" class="h2" />

      <TextField fontSize="20" width="100%" margin="0" v-model="challenge.name" />

      <Label text="Participants" class="h2" />

      <FlexboxLayout flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
        <Label :text="player.name" fontSize="20" v-for="player in challenge.players" :key="player.id"/>
        <Button class="button" @tap="registerPlayer">
          <FormattedString>
            <Label text="Ajouter un participant" />
          </FormattedString>
        </Button>

      </FlexboxLayout>

      <Button class="button" :isEnabled="isChallengeValid" @tap="createChallenge">
        <FormattedString>
          <Label text="Créer" />
        </FormattedString>

      </Button>

    </FlexboxLayout>
  </Page>
</template>


<script lang="ts">

import Vue from "nativescript-vue";
import CreateChallengePage from './CreateChallengePage.vue'
import {Dialogs} from "@nativescript/core";
import {PromptResult} from "@nativescript/core/ui/dialogs";
import ChallengePage from "~/pages/ChallengePage.vue";


export default Vue.extend({
  data() {
    return {
      challenge: {
        name: "",
        players: []
      } as Challenge
    }
  },
  computed: {
    isChallengeValid() {
      return this.challenge.name.trim().length > 0 && this.challenge.players.length > 1;
    }
  },
  methods: {
    setName(args: any) {
      console.log(args);
    },
    registerPlayer(args: any) {
      Dialogs.prompt({
        title: 'Nouveau participant',
        message: `Entrez le nom du nouveau participant au challenge "${this.challenge.name}":`,
        //defaultText: 'Michelle Du Coup',
        okButtonText: 'OK',
        neutralButtonText: 'Annuler',
        // cancelable: true,
        // cancelButtonText: 'Cancel',
        // capitalizationType: 'none',
        // inputType: 'email',
    }).then((result: PromptResult) => {
      if (result.result) {
        this.$data.challenge.players.push({
          id: (Math.max(this.$data.challenge.players.map((player: Player) => player.id)) ?? 0) + 1,
          name: result.text,
          color: "#43B3F4",
          score: 0
          }
        );
      }

    })
    },
    createChallenge(args: any) {
      console.log("createChallenge");
      this.$navigateTo(ChallengePage, {props: {challenge: this.challenge}});
    }
  },
});
</script>


<style scoped lang="scss">
.container {
  * {
    margin: 10 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

}

.text-red {
  color: #C51818;
  font-weight: bold;
}

.text-stroke {
  -webkit-text-stroke: 2px #C51818;
}

.button {
  background-color: #C51818;
  color: #fff;
  padding: 20px 50px;
  font-size: 16px;
  border-radius: 50%;
}

.h2 {
  font-size: 30;
  font-weight: 700;
}
</style>
