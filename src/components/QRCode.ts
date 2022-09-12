import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    value: String,
  },
  components: {},
})
export default class QRCode extends Vue {
  value!: string;

  mounted() {
    
  }
}
