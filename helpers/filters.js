export function filterActivites (filter, activites) {
  let filteredList = [...activites]

  // Filter status
  if (filter.status !== 'all') {
    const filtered = filteredList.filter(activite => activite.status === filter.status)
    filteredList = filtered
  }

  // Search
  if (filter.search !== '') {
    const searchList = []
    const searchTerm = filter.search.toLowerCase()
    for (let i = 0; i < filteredList.length; i++) {
      if (
        (filteredList[i].ville !== null && filteredList[i].ville.toLowerCase().includes(searchTerm)) ||
        (filteredList[i].pay !== null && filteredList[i].pay.toLowerCase().includes(searchTerm))
      ) {
        searchList.push(filteredList[i])
      }
    }
    filteredList = searchList
  }

  return filteredList

}

