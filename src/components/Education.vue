<template>
  <div class="resume-section p-3 p-lg-5 d-flex flex-column">
    <h2>Education</h2>
    <div v-for="part in parts" :key="part">
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">{{part.course}}</h3>
          <div class="subheading mb-3">{{part.school}}</div>
          <p>Nothing</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{{part.date_started}} - {{part.date_ended}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      parts: []
    }
  }
}
</script>

<style>

</style>
