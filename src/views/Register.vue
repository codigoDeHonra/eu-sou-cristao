<template>
  <v-container fluid>
    <v-row
      v-if="!confirmed"
      align="center"
      justify="center"
    >
      <v-col cols="4">
          <iframe width="400"
              height="315"
              src="https://www.youtube.com/embed/1"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
      </v-col>
      <v-col cols="4">
          <v-form v-model="valid">
          <v-text-field
              v-model="discipulo.name"
              label="Nome"
              outlined
              v-validate="'required'"
              data-vv-name="name"
              :error-messages="errors.collect('name')"
          ></v-text-field>
          <v-text-field
              v-model="discipulo.email"
              label="E-mail"
              outlined
              :error-messages="errors.collect('email')"
              v-validate="'required|email'"
              data-vv-name="email"
          ></v-text-field>
          <v-checkbox
              v-model="discipulo.accept"
              label="Eu aceito"
              :error-messages="errors.collect('accept')"
              v-validate="'required'"
              data-vv-name="accept"
              value="1"
              type="checkbox"
          >
          </v-checkbox>
          <v-btn
            @click="save()"
          >
            Salvar
          </v-btn>
          </v-form>
      </v-col>
        <button @click="recaptcha">Execute recaptcha</button>

    </v-row>
    <v-row v-else>
      <v-col cols="4">
        Acesse seu e-mail: {{ discipulo.email }}, e clique no link de confirmação, sem confirmar o seu nome não será visivel no site.
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
//import VueRecaptcha from 'vue-recaptcha'
import { VueReCaptcha } from 'vue-recaptcha-v3'
Vue.use(VeeValidate);
Vue.use(VueReCaptcha, { siteKey: '6LfX7rsUAAAAAD17lpAJZb3cS7lt9JLTDGH1s_KB' })

export default {
  name: 'Register',
  data: () => (
    {
      valid: true,
      confirmed: false,
      discipulo: {
        name:'',
        email:'',
        accept: '',
      },
      dictionary: {
        attributes: {
          name: 'o nome',
          email: 'o endereço de E-mail',
          accept: 'Aceitar'
        },
        custom: {
          name: {
            required: (a)=> `É necessário ${a}.`,
          },
          email: {
            required: (a) => ` É necessário ${a}.`,
            email: (a) => ` ${a} não é valido.`,
          },
          accept:{
            required: (a) => ` É necessário ${a}.`,
          }
        },
      }
    }
  ),
    created () {
    },
  computed: {
    ...mapGetters({
      usuarioGetter: 'usuario/usuarioGetter',
    }),
  },
  mounted(){
          this.$validator.localize('en', this.dictionary)
  },
  methods: {
    ...mapActions({
      insertDiscipuloAction: 'discipulo/insertDiscipuloAction',
    }),
    save(){
      this.$validator.validateAll()
        .then((r)=> {
          if(r) {
             /*const p = this
              .insertDiscipuloAction(this.discipulo)
            console.log(p.resolve)*/
              const p = this.insertDiscipuloAction(this.discipulo)
            console.log(p.then(r => console.log(r)))

            //Promise.all([p]).then(function(r) { console.log(r)})
          }
        }
        )
    },
    recaptcha() {
      this.$recaptcha('login').then((token) => {
        console.log(token) // Will print the token
      })
    }
  },
};
</script>
