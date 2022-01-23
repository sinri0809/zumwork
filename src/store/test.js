'use strict';

// before store.js
export const getData = async () => {
  const dataPromise = fetch('/api/posts');
  const response = await dataPromise;
  const result = await response.json()
  return result;
}

export const getPosts = async () => {
  const dataPromise = fetch('/api/posts');
  const response = await dataPromise;
  const result = await response.json();
  // const contents = JSON.stringify(result.contents);
  return result.contents;
}