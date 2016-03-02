let responseHandler = promise => {
  return promise
    .then(res => res.json())
    .then(res => {
      if (res.status == 'ERROR') throw new Error()
      return res.data
    })
}

export default {
  getPosts: () => responseHandler(fetch('/api/posts')),
  addPost: (data) => responseHandler(fetch('/api/posts', { method: 'POST', body: data })),
  removePost: (id) => responseHandler(fetch(`/api/posts/${id}`, { method: 'DELETE' })),
  savePost: (id, data) => responseHandler(fetch(`/api/posts/${id}`, { method: 'PATCH', body: JSON.stringify(data), headers: { 'Content-type': 'application/json' } }))
}
