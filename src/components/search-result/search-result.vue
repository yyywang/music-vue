<template>
  <div class="search-result">
    <div class="result-tip">
      <span>
        共有
        <span class="result-count">3</span>
        条搜索结果
      </span>
    </div>
    <div class="tb-container">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>分类</th>
            <th>发布人</th>
            <th>发布内容</th>
            <th>发布时间</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>课内视频</td>
            <td>张老师</td>
            <td>中国发展时期的交响乐鉴赏</td>
            <td>2020/01/27 22:00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>课内视频</td>
            <td>张老师</td>
            <td>中国发展时期的交响乐鉴赏</td>
            <td>2020/01/27 22:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus'>
@import '~common/stylus/variable'

.search-result {
  width 1200px
  margin 0 auto
  margin-top $layout-margin-top
  .result-tip {
    color $color-text
    font-size $font-size-large = 18px
    margin-bottom 22px
  }
  .tb-container {
    color $color-theme
    table {
      width 100%
      thead {
        background-color $color-theme-d
        tr {
          border-radius 8px
          th {
            padding 15px 0px
          }
        }
      }
      tbody {
        margin-top 10px
        background-color #ffffff
        tr {
          cursor pointer
          border-bottom 2px solid color-theme-rgba(0.3)
          &:hover {
            background-color color-theme-d-rgba(0.3)
          }
          td {
            text-align center
            padding 10px 0
          }
        }
      }
    }
  }
}
</style>
