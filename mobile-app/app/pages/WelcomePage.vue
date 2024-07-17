<template>
  <Page xmlns="http://www.nativescript.org/tns.xsd">

    <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center">
      <!--
      <Label fontSize="40">
        <FormattedString>
          <Label class="text-red" text="pas "></Label>
          <Label class="text-stroke" text="du coup"></Label>
        </FormattedString>
      </Label>
      -->
      <Image src="~/assets/icon-inline.png" height="60" margin="20 0" />

      <Label fontSize="20">Aucun challenge en cours</Label>

      <Button class="button" @tap="newChallenge">
        <FormattedString>
          <Label class="far" text.decode="&#x2b;" style="font-weight: bold;font-size: 20px;" />
          <Label text="  Nouveau challenge" />
        </FormattedString>

      </Button>

    </FlexboxLayout>
  </Page>
</template>


<script lang="ts">

import Vue from "nativescript-vue";
import CreateChallengePage from "~/pages/CreateChallengePage.vue";

export default Vue.extend({
  methods: {
    newChallenge() {
      console.log("newChallenge");
      this.$navigateTo(CreateChallengePage);
    }
  }
});
</script>


<style scoped lang="scss">
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
</style>
