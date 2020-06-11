<template> 
    <div class="text-center vld-overlay is-active bg-white opacity-60">
      <div class="display-flex flex-column flex-justify-center">
        <svg
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          :width="width"
          :height="height"
          :stroke="color"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="2">
              <circle stroke-opacity="0.25" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>
    </div> 
</template>
<script>
export default {
  name: "app-spinner",
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      default: "#000"
    },
    height: {
      type: Number,
      default: 64
    },
    width: {
      type: Number,
      default: 64
    }
  }
};
</script>
<style scoped>
.vld-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: none;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
}

.vld-overlay.is-active {
  display: flex;
}

.vld-overlay.is-full-page {
  z-index: 9999;
  position: fixed;
}

.vld-overlay .vld-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  opacity: 0.5;
}

.vld-overlay .vld-icon,
.vld-parent {
  position: relative;
}
</style>