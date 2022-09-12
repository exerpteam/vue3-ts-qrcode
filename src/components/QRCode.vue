<template>
  <div>
    <div v-if="imageUrl" :class="myclass">
      <img :src="imageUrl" :class="imgclass" crossorigin="anonymous" />
    </div>
    <div v-if="download">
      <button @click="onDownloadClick" :class="downloadButton">
        {{ ButtonName }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./QRCode.ts" />
  