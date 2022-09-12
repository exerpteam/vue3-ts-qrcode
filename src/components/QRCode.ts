import { Options, Vue } from 'vue-class-component';
import QRCodeStyling from './core/QRCodeStyling';
import { Gradient } from './core/QROptions';
import { CornerDotType, CornerSquareType, DotType, ErrorCorrectionLevel, Mode, TypeNumber } from './types';

@Options({
  props: {
    width: {
      type: Number,
      default: 300
    },
    imgclass: {
      type: String,
      default: ""
    },
    myclass: {
      type: String,
      default: ""
    },
    downloadButton: {
      type: String,
      default: ""
    },
    ButtonName: {
      type: String,
      default: "Download3"
    },
    height: {
      type: Number,
      default: 300
    },
    margin: {
      type: Number,
      default: 0
    },
    value: {
      type: String,
      required: true
    },
    imageIconUrl: {
      type: String,
      default: ""
    },
    qrOptions: {
      type: Object,
      default: () => ({
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
      })
    },
    imageOptions: {
      type: Object,
      default: () => ({ hideBackgroundDots: true, imageSize: 0.4, margin: 0 })
    },
    dotsOptions: {
      type: Object,
      default: () => ({
        type: "dots",
        color: "#6a1a4c",
        gradient: {
          type: "linear",
          rotation: 0,
          colorStops: [
            { offset: 0, color: "#6a1a4c" },
            { offset: 1, color: "#6a1a4c" }
          ]
        }
      })
    },
    backgroundOptions: {
      type: Object,
      default: () => ({ color: "#ffffff" })
    },
    cornersSquareOptions: {
      type: Object,
      default: () => ({ type: "dot", color: "#000000" })
    },
    cornersDotOptions: {
      type: Object,
      default: () => ({ type: undefined, color: "#000000" })
    },
    fileExt: {
      type: String,
      default: "png"
    },
    download: {
      type: Boolean,
      default: false
    },

    downloadOptions: {
      type: Object,
      default: () => ({ name: "vqr", extension: "png" })
    }
  },
  components: {},
})
export default class QRCode extends Vue {

  value!: string;
  width!: number;
  height!: number;
  margin!: number;
  imgclass!: string;
  downloadButton!: string;
  myclass!: string;
  qrOptions!: {
    typeNumber?: TypeNumber;
    mode?: Mode;
    errorCorrectionLevel?: ErrorCorrectionLevel;
  };
  imageOptions!: {
    hideBackgroundDots: boolean;
    imageSize: number;
    crossOrigin?: string;
    margin: number;
  }
  dotsOptions!: {
    type: DotType;
    color: string;
    gradient?: Gradient;
  };
  backgroundOptions!: {
    color: string;
    gradient?: Gradient;
  }
  imageIconUrl!: string;
  cornersSquareOptions!: {
    type?: CornerSquareType;
    color?: string;
    gradient?: Gradient;
  };
  cornersDotOptions!: {
    type?: CornerDotType;
    color?: string;
    gradient?: Gradient;
  }
  fileExt = "png";
  imageUrl = "";
  image = '';

  qrCode: QRCodeStyling | undefined

  mounted() {

    this.urlToDataUri(this.imageIconUrl)
      .then((data) => {
        this.image = data as string;
      })
      .then(() => {
        this.qrCode = new QRCodeStyling({
          data: this.value,
          width: this.width,
          height: this.height,
          margin: this.margin,
          qrOptions: this.qrOptions,
          imageOptions: this.imageOptions,
          dotsOptions: this.dotsOptions,
          backgroundOptions: this.backgroundOptions,
          image: this.image,
          cornersSquareOptions: this.cornersSquareOptions,
          cornersDotOptions: this.cornersDotOptions
        })
        return this.qrCode.getImageUrl(this.fileExt)
      })
      .then((url: string) => {
        this.imageUrl = url;
      })
      .catch((err: Error) => {
        console.error(err);
      });


  }

  async urlToDataUri(url: string | undefined): Promise<string | ArrayBuffer | null> {
    if (!url) {
      return '';
    }
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error;
        }
        return response.blob();
      })
      .then(
        blob =>
          new Promise(callback => {
            const reader = new FileReader();
            reader.onload = function () {
              callback(this.result);
            };
            reader.readAsDataURL(blob);
          })
      );
  }


}
