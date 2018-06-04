export default str => str.trim().match(/[\d.\-+]*\s*(.*)/)[1] || "";
