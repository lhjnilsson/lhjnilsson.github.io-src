<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column">
    <div class="my-auto">
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
  </section>
</template>

<script>
export default {
  data () {
    return {
      parts: [
        {'company': 'Volvo Information Technology',
          'position': 'Application Specialist',
          'summary': 'Maintainance of Time&Attendance System for Volvo Group and Volvo Cars. ~500 embedded devices running JAVA service to push records to servers and databases',
          'date_started': 'Aug 2012',
          'date_ended': 'Feb 2015'},
        {'company': 'Connection Technology Systems NE AB',
          'summary': 'Product Manager for worlds first Open IoT- Gateway with Z-Wave. Providing 30+ partners access and assistance to Git where they have possibility to develop applications running either locally or on a backend.\
          Has MQTT- Connection to services like Azure, Watson and more..',
          'position': 'Product Manager/Network Engineer',
          'date_started': 'Feb 2015',
          'date_ended': 'Present...'}
      ]
    }
  }
}
</script>

<style>

</style>
