<template>
  <b-container>
    <section>
      <h3>Missions</h3>
      <b-row>
        <template v-for="card in cards">
          <v-card :key="card.id" :data="card" />
        </template>
      </b-row>
    </section>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'
import VCard, { Card } from '~/components/Card.vue'

@Component({ name: 'IndexPage', components: { VCard } })
export default class IndexPage extends Vue {
  head (): MetaInfo {
    return {
      title: 'Index'
    }
  }

  get cards (): Array<Card> {
    return [
      {
        id: '15a9LAUXCm9FkAVexH4q',
        company_id: '114',
        name: 'Desenvolvedor Backend',
        thumb_url: 'https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png',
        priority: 1,
        due_date: {
          available_at: 1572127435329
        },
        status: 'IN_PROGRESS',
        enrollment: {
          id: '114_15a9LAUXCm9FkAVexH4q_453995',
          percentage: 21
        }
      },
      {
        id: 'OgYPcZXbYgHQCFCS3b8a',
        company_id: '114',
        name: 'Desenvolvedor Frontend',
        thumb_url: 'https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png',
        priority: 1,
        due_date: {
          available_at: 1577460755435
        },
        status: 'NOT_STARTED'
      },
      {
        id: '0DynFIwidEoqpJxbpmQK',
        company_id: '114',
        name: 'Desenvolvedor iOS',
        thumb_url: 'https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png',
        priority: 1,
        status: 'IN_PROGRESS',
        enrollment: {
          id: '114_0DynFIwidEoqpJxbpmQK_453995',
          percentage: 63
        },
        due_date: null
      },
      {
        id: '3b0557ab-c9d6-40e8-9a62-5f0b012cafe7',
        company_id: '114',
        name: 'Desenvolvedor Android',
        thumb_url: null,
        priority: 1,
        status: 'COMPLETED',
        enrollment: {
          id: '114_3b0557ab-c9d6-40e8-9a62-5f0b012cafe7_453995',
          percentage: 100
        },
        due_date: null
      },
      {
        id: 'Jx0TJYrLFhYOeIc4boBL',
        company_id: '114',
        name: 'Desenvolvedor Flutter',
        thumb_url: 'https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png',
        priority: 1,
        status: 'NOT_STARTED',
        due_date: null
      },
      {
        id: 'Jx0TJYrLFhYOeIc4boBL',
        company_id: '114',
        name: 'Site Reliability Engineer',
        thumb_url: 'https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png',
        priority: 1,
        status: 'BLOCKED',
        due_date: null
      }
    ]
  }
}
</script>
