<!-- 推荐详情页 -->
<template>
  <div class="layout-heart">
    <nav-path :navPaths="navPaths"></nav-path>
    <div class="recommend-detail huaiyue">
      <!-- S=左侧内容 -->
      <div class="left">
        <div class="header">
          <div class="title">G弦上的咏叹调</div>
          <div class="info">
            <div class="author">By 张璐</div>
            <div class="datetime">2020/10/10 20:00</div>
          </div>
          <div class="divider-bold"></div>
          <div class="content">
            第一次听到这首歌是在日推里，前奏很好听，副歌也不差（听到副歌直接点的收藏），歌词很有味道。我觉得这首歌可以有两种不同的理解，毕竟同样的歌给一百个人听会有一百钟各自的感触。
            1）爱情方面：
            前面歌词就像来自远方吹来一阵清幽惹人不禁悲愁的感觉，很民谣很文艺。
            后来副歌“中伤不是你的强项，黑夜看不见你的坚强，流放变成我的苍凉”
          </div>
          <div class="addr">
            <span>播放地址：</span>
            <div class="urls">
              <a href="http://" target="_blank" rel="noopener noreferrer">http://www.baidu.com</a>
              <a href="http://" target="_blank" rel="noopener noreferrer">http://www.baidu.com</a>
            </div>
          </div>
          <div class="tags">
            <span class="tag-default">欧美</span>
            <span class="tag-default">现代纯音</span>
            <span class="tag-default">爵士</span>
          </div>
          <div class="operator-container">
            <div class="statistics">
              <div class="view-num">
                <i class="icon-eye_open"></i>
                <span>222</span>
              </div>
              <div class="like-num">
                <i class="icon-_334"></i>
                <span>22</span>
              </div>
              <div class="collect-num">
                <i class="icon-star"></i>
                <span>333</span>
              </div>
              <div class="comment-num">
                <i class="icon-comment"></i>
                <span>444</span>
              </div>
            </div>
            <div class="operator">
              <div class="edit">编辑</div>
              <div class="delete">删除</div>
            </div>
          </div>
        </div>
        <!-- S=评论输入框 -->
        <div class="comment-input-box margin-tb-lg">
          <input class="comment-input" type="text" name id placeholder="写下你的想法吧" />
          <button class="btn-info">发表评论</button>
        </div>
        <!-- E=评论输入框 -->
        <div class="comment-list">
          <div class="comment-item" v-for="(item, idx) in 3" :key="idx">
            <div class="comment-detail">
              <div class="header">
                <span class="author">罗松路</span>
                <span class="datetime">2020/10/10 20:00</span>
              </div>
              <div class="body">德国著名小提琴家威廉密于1817年将第一小提琴部分的曲调由D大调改为C大调，从而将旋律全部移至小提琴G弦上演奏，故名《G弦上的咏叹调。</div>
              <div class="footer">
                <span class="link-reply">回复</span>
              </div>
            </div>
            <div class="replies">
              <div class="divider"></div>
              <div class="header">
                <span class="author">罗松路</span>
                <span class="datetime">2020/10/10 20:00</span>
              </div>
              <div class="body">德国著名小提琴家威廉密于1817年将第一小提琴部分的曲调由D大调改为C大调，从而将旋律全部移至小提琴G弦上演奏，故名《G弦上的咏叹调。</div>
              <div class="footer">
                <div class="replies-num">
                  <span>
                    共
                    <span class="bold">5</span>条回复,
                  </span>
                  <span class="view-replies">请点击查看</span>
                </div>
                <span class="link-reply">回复</span>
              </div>
            </div>
            <div v-if="idx !== 3-1" class="divider"></div>
          </div>
        </div>
      </div>
      <!-- E=左侧内容 -->
      <!-- S=右侧内容 -->
      <div class="right">
        <div class="title">其他推荐</div>
        <div class="recommend-list">
          <span class="recommend-item" v-for="(item, idx) in 6" :key="idx">罗密欧与朱丽叶</span>
        </div>
      </div>
      <!-- E=右侧内容 -->
    </div>
  </div>
</template>

<script>
import NavPath from 'components/nav-path/nav-path'

export default {
  data() {
    return {
      navPaths: [
        {
          name: '美音推荐',
          path: { name: 'recommend' }
        },
        {
          name: '查看推荐',
          path: { name: 'recommendDetail', params: { recommendId: 1 } }
        }
      ]
    }
  },
  components: {
    NavPath
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.recommend-detail {
  margin-top 20px
  color $color-text
  .left {
    .header {
      padding 20px
      background-color #ffffff
      border-radius 8px
      .title {
        font-size 22px
        text-align center
        padding 10px 0
        color $color-text
      }
      .info {
        display flex
        justify-content center
        font-size 16px
        padding 15px 0
        text-align center
        color $color-text-gray
        .datetime {
          margin-left 20px
        }
      }
      .content {
        font-size 15px
        line-height 1.6em
        padding 15px
      }
      .addr {
        display flex
        padding 0 15px 15px 15px
        .urls {
          display flex
          flex-direction column
          justify-content flex-start
          a {
            margin-bottom 10px
          }
        }
      }
      .tags {
        display flex
        padding-left 15px
        &>span {
          margin-right 10px
        }
      }
      .operator-container {
        display flex
        justify-content space-between
        padding-top 15px
        padding-left 15px
        padding-right 15px
        .statistics {
          display flex
          align-items center
          &>div {
            margin-right 20px
          }
        }
        .operator {
          display flex
          align-items center
          .edit {
            margin-right 15px
            hover-move-right()
            color $color-sub-theme
          }
          .delete {
            hover-move-right()
            color red
          }
        }
      }
    }
    .comment-list {
      padding 20px
      background-color #ffffff
      border-radius 8px
    }
  }
  .right {
    padding 20px
    height 300px
    background-color #ffffff
    .title {
      text-shadow-theme()
    }
    .recommend-list {
      display flex
      flex-direction column
      .recommend-item {
        no-wrap()
        color $color-sub-theme
        line-height 1.6
        hover-move-right()
      }
    }
  }
}
</style>
