export function handleSelectionChange (currentRow) {
  this.selectedData = currentRow
}
export function handleSizeChange (val) {
  this.listQuery.limit = val
  this.getList && this.getList()
}
export function handleCurrentPage (val) {
  this.listQuery.page = val
  this.getList && this.getList()
}
