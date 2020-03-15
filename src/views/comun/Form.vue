<template>
  <div>
    <form>
      <v-flex xs12 sm12>
        <v-text-field
          v-model="formulario.nome"
          v-validate="'required|min:10|max:60'"
          :counter="60"
          :error-messages="errors.collect('nome')"
          label="Nome"
          data-vv-name="nome"
        />
      </v-flex>
      <v-layout wrap>
        <v-flex xs12 sm6>
          <v-text-field
            v-model="formulario.telefone"
            class="teste"
            v-mask="mask"
            v-validate="'required'"
            :error-messages="errors.collect('telefone')"
            label="Telefone"
            data-vv-name="telefone"
          />
        </v-flex>
        <v-flex xs12 sm6>
          <v-select
            class="teste-2"
            v-model="formulario.nosConheceu"
            v-validate="'required'"
            :items="items"
            :error-messages="errors.collect('como nos conheceu')"
            label="Como nos conheceu?"
            data-vv-name="como nos conheceu"
          />
        </v-flex>
      </v-layout>

      <v-flex xs12 sm12>
        <div class="alinha-esquerda">
          <header>Possui redes sociais?</header>
        </div>
        <v-radio-group
          v-model="formulario.redeSocial"
          :mandatory="false"
          v-validate="'required'"
          :error-messages="errors.collect('possui redes sociais')"
          data-vv-name="possui redes sociais"
          row
        >
          <v-radio label="Sim" value="sim"></v-radio>
          <v-radio label="Não" value="não"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs12 sm12>
        <div class="alinha-esquerda">
          <header>Quais:</header>
        </div>
        <v-checkbox
          :disabled="verificaRadio()"
          v-model="formulario.listaRedesSociais"
          value="Facebook"
          label="Facebook"
          type="checkbox"
          hide-details
        />
        <v-checkbox
          :disabled="verificaRadio()"
          v-model="formulario.listaRedesSociais"
          value="LinkedIn"
          label="LinkedIn"
          type="checkbox"
          hide-details
        />
        <v-checkbox
          :disabled="verificaRadio()"
          v-model="formulario.listaRedesSociais"
          value="Instagram"
          label="Instagram"
          type="checkbox"
        />
      </v-flex>
      <v-btn @click="clear">limpar</v-btn>
      <v-btn :disabled="enviado" color="success" @click="salvar">enviar</v-btn>
    </form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "Form",
  directives: {
    mask
  },
  data: () => ({
    items: ["TV", "Internet", "Outros"],
    checkbox: [],
    mask: "## - #########"
  }),
  props: {
    formulario: {
      required: true
    },
    enviado: {
      required: true,
      default: false
    }
  },
  methods: {
    async salvar() {
      await this.verificaCheckBox();
      await this.$validator.validateAll().then(result => {
        if (result) {
          this.$emit("salvar");
        }
      });
    },
    verificaCheckBox() {
      if (this.formulario.redeSocial === "não") {
        this.formulario.listaRedesSociais = [];
      }
    },
    verificaRadio() {
      if (this.formulario.redeSocial === "sim") {
        return false;
      } else {
        return true;
      }
    },
    clear() {
      this.$emit("limpar");
    }
  }
};
</script>

<style lang="stylus">
header
    font-size 18px !important

.alinha-esquerda
    text-align left !important
</style>
