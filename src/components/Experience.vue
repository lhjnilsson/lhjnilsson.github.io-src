<template>
  <div class="resume-section p-3 p-lg-5 d-flex flex-column">
    <h2>Experience</h2>
    <div v-for="part in parts" :key="part">
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">{{part.position}}</h3>
          <div class="subheading mb-3">{{part.company}}</div>
          <p>{{part.summary}}</p>
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
      parts: [
          {'company': 'Volvo Information Technology',
          'position': 'Application Specialist',
          'summary': 'Maintainance of Time&Attendance System for Volvo Group and Volvo Cars',
          'date_started': 'Aug 2012',
          'date_ended': 'Feb 2015'},
          {'company': 'Connection Technology Systems NE AB',
          'summary': 'Product Manager for Embedded IoT- Gateway with Z-Wave. Networking Engineer for CPE and Access- Switches sold by CTS.',
          'position': 'Product Manager/Network Engineer',
          'date_started': 'Feb 2015',
          'date_ended': '-'}
      ]
    }
  }
}
</script>

<style>

</style>
