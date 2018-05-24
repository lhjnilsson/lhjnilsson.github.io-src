<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column">
    <div class="my-auto">
      <h2>Work</h2>
      <div v-for="part in parts" :key="part">
        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          <div class="resume-content mr-auto">
            <a :href="part.url" rel="noopener noreferrer" target="_blank">
              <h3 class="mb-0">{{part.name}}</h3>
              <div class="subheading mb-3">{{part.summary}}</div>
            </a>
            <p>{{part.description}}</p>
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
        {
          'name': 'NodeDefender',
          'url': 'http://nodedefender.com',
          'summary': 'Management and Overview of remote sites with IoT',
          'description': 'Python/Flask application that can control one or many iCPEs over MQTT.'
        },
        {
          'name': 'CTS-iCPE',
          'url': 'http://cts-icpe.com',
          'summary': 'Open IoT- Gateway with Z-Wave',
          'description': 'Product Manager for Z-Wave Gateway. Assisting customer and doing test/modification to fullfill their demands.'
        }
      ]
    }
  }
}
</script>

<style>

</style>
