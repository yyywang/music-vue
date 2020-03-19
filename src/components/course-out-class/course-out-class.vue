<template>
  <div class="layout-heart">
    <nav-path :navPaths="navPaths" class="margin-bottom-lg margin-top-sm"></nav-path>
    <div class="course-out-class">
      <div class="out-class-music-card-container" v-for="(item, idx) in musics" :key="idx">
        <out-class-music-card v-bind="item"></out-class-music-card>
      </div>
    </div>
  </div>
</template>

<script>
import NavPath from 'components/nav-path/nav-path'
import OutClassMusicCard from 'components/out-class-music-card/out-class-music-card'

export default {
  data() {
    return {
      navPaths: [
        {
          name: '在线学习',
          path: { name: 'online' }
        },
        {
          name: '古典音乐欣赏',
          path: { name: 'courseDetail', params: { courseId: 1 } }
        },
        {
          name: '课外欣赏',
          path: { name: 'courseOutClass' }
        }
      ],
      musics: [
        {
          title: 'G弦上的咏叹调',
          composer: '巴赫',
          performer: '萨拉张',
          duration: 6000,
          statistics: {
            view_num: 10,
            like_num: 10,
            comment_num: 10,
            fav_num: 10
          }
        },
        {
          title: 'G弦上的咏叹调',
          composer: '巴赫',
          performer: '萨拉张',
          duration: 6000,
          statistics: {
            view_num: 10,
            like_num: 10,
            comment_num: 10,
            fav_num: 10
          }
        },
        {
          title: 'G弦上的咏叹调',
          composer: '巴赫',
          performer: '萨拉张',
          duration: 6000,
          statistics: {
            view_num: 10,
            like_num: 10,
            comment_num: 10,
            fav_num: 10
          }
        },
        {
          title: 'G弦上的咏叹调',
          composer: '巴赫',
          performer: '萨拉张',
          duration: 6000,
          statistics: {
            view_num: 10,
            like_num: 10,
            comment_num: 10,
            fav_num: 10
          }
        }
      ]
    }
  },
  components: {
    NavPath,
    OutClassMusicCard
  }
}
</script>

<style lang="stylus">
.course-out-class {
  display flex
  flex-wrap wrap
  justify-content space-between
}
</style>
