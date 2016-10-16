/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

export default class PaginateList extends Component {
  static pageSize = 10

  static  childContextTypes = {
    sort: PropTypes.func
  }

  getChildContext() {
    return {
      sort: order=> this.sort(order)
    }
  }

  constructor() {
    super()
    this.state = {currentPage: 1}
  }

  getPageInfo() {
    return {
      start: this.state.currentPage,
      limit: PaginateList.pageSize
    }
  }

  sort(order) {
  }

  nextPage() {

  }

  beforePage() {

  }

  toPage() {

  }

  render() {

    var self = this

    function showPages(pages) {
      function getClassName(page) {
        return classnames({'active': self.state.currentPage == page})
      }

      if (!pages) {
        return null
      }

      return pages.map(page=> {
        return (
          <li key={page} className={getClassName(page)}>
            <a onClick={this.toPage(page)}>{page}</a>
          </li>
        )
      })
    }

    return (
      <div className="paginate-list">
        <div className="table relative" fix-header="" fix-left="">
          <span ng-if="paginateListCtrl.recordsTotal == 0" className="no-list-data">
              暂无数据
          </span>
          <div className="js-fix-header-container"></div>

          <div className="js-table-container">
            {this.props.children}
          </div>
        </div>

        <div className="list-info">
          <div className="list-count-info">
            <span ng-if="paginateListCtrl.recordsTotal > 0">
                当前第{this.state.currentPage}页，共{this.props.listInfo.total}条数据
            </span>
          </div>
          <nav ng-if="paginateListCtrl.pages.length > 0" className="list-nav-button">
            <ul className="pagination">
              <li ng-className="{'disabled': paginateListCtrl.currentPage == 1}"
                  ng-click={this.beforePage()}>
                <a aria-label="Previous">
                  上一页
                </a>
              </li>

              {showPages(this.props.listInfo.pages)}

              <li className="{'disabled': paginateListCtrl.currentPage == paginateListCtrl.pages.length}"
                  onClick={this.nextPage()}>
                <a aria-label="Next">
                  下一页
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
