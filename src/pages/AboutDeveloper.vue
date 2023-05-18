<template>
  <q-page padding>
    <h1 class="text-h4">S. Mahmud Nabil</h1>
    <p>Student, Dept. of MSE, RUET.</p>
    <h2 class="text-h5">Connect with me</h2>
    <div class="q-gutter-sm">
      <q-btn
        v-for="link of links"
        :key="link.title"
        :label="link.title"
        :icon="(link.iconType || 'fa-brands') + ' ' + link.icon"
        :href="link.link"
        target="_blank"
      />
      <q-btn
        href="https://keyoxide.org/7fcad77c8bd95163fb835f0ed3a5dce7153c5774"
        label="Keyoxide Profile"
        target="_blank"
      />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
const links = [
  {
    title: 'Github',
    icon: 'fa-github',
    link: 'https://github.com/NabilSnigdho',
  },
  {
    title: 'Gitlab',
    icon: 'fa-gitlab',
    link: 'https://gitlab.com/nabilsnigdho',
  },
  {
    title: 'Goodreads',
    icon: 'fa-goodreads',
    link: 'https://www.goodreads.com/nabilsnigdho',
  },
  {
    title: 'Stack Overflow',
    icon: 'fa-stack-overflow',
    link: 'https://stackoverflow.com/users/11283374/mahmud-nabil-snigdho',
  },
  {
    title: 'Facebook',
    icon: 'fa-facebook',
    link: 'https://www.facebook.com/nabilmahmud.snigdho',
  },
  {
    title: 'Instagram',
    icon: 'fa-instagram',
    link: 'https://www.instagram.com/nabilsnigdho',
  },
  {
    title: 'Twitter',
    icon: 'fa-twitter',
    link: 'https://twitter.com/SnigdhoNabil',
  },
  {
    title: 'Linkedin',
    icon: 'fa-linkedin',
    link: 'https://www.linkedin.com/in/mahmud-nabil-73614a1b1',
  },
  {
    title: 'Telegram',
    icon: 'fa-telegram',
    link: 'https://t.me/nabilsnigdho',
  },
  {
    title: 'Email',
    icon: 'fa-envelope',
    iconType: 'fa-solid',
    link: 'mailto:nabilsnigdho@gmail.com',
  },
];
</script>
