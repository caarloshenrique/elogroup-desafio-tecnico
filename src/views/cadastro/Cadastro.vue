<template>
  <v-layout align-center justify-center row wrap fill-height>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Formulário</h3>
          </div>
        </v-card-title>
        <div>
          <v-container grid-list-md text-xs-center>
            <Form
              :enviado="enviado"
              :formulario="formulario"
              v-model="formulario"
              @salvar="salvar"
              @limpar="clear"
            />
          </v-container>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { actionTypes } from "../../commons/constants";
import Form from "../comun/Form";

export default {
  name: "Cadastro",
  components: { Form },
  data() {
    return {
      enviado: false,
      formulario: {
        nome: "",
        telefone: null,
        nosConheceu: "",
        redeSocial: null,
        listaRedesSociais: []
      }
    };
  },
  methods: {
    clear() {
      this.formulario.nome = "";
      this.formulario.telefone = null;
      this.formulario.nosConheceu = "";
      this.formulario.redeSocial = null;
      this.listaRedesSociais = [];
      this.$validator.reset();
      this.enviado = false;
    },
    async salvar() {
      this.enviado = true;
      const formulario = this.formulario;
      this.formulario = await this.$store.dispatch(
        actionTypes.SALVAR_CADASTRO,
        {
          formulario
        }
      );
      alert("Salvo com sucesso!");
      location.reload();
    }
  }
};
</script>

<style lang="stylus"></style>
