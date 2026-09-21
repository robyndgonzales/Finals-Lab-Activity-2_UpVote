// Isolated Submission Component
const submissionComponent = {
  template: `
    <div class="submission-content">
      <figure class="media-left">
        <img class="image is-64x64 submission-thumb" :src="submission.submissionImage" :alt="submission.title">
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a :href="submission.url" class="has-text-info">{{ submission.title }}</a>
              <span class="tag is-small ml-2 is-rounded">#{{ submission.id }}</span>
            </strong>
            <br>
            {{ submission.description }}
            <br>
            <small class="is-size-7 submitted-by">
              Submitted by:
              <img class="image is-24x24 ml-2 avatar-img" :src="submission.avatar" :alt="submission.title">
            </small>
          </p>
        </div>
      </div>
      <div class="media-right">
        <span class="icon is-small upvote-button" @click="upvote(submission.id)">
          <i class="fa fa-chevron-up"></i>
          <strong class="has-text-info ml-1 vote-count">{{ submission.votes }}</strong>
        </span>
      </div>
    </div>
  `,
  props: ['submission', 'submissions'],
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        sub => sub.id === submissionId
      );
      if (submission) {
        submission.votes++;
      }
    }
  }
};

// Root Vue Application Definition
const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions
    };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.slice().sort((a, b) => b.votes - a.votes);
    }
  },
  components: {
    'submission-component': submissionComponent
  }
};

// Mount to the #app element
Vue.createApp(upvoteApp).mount('#app');