import axios from "axios";

export const getArticles = (topic_slug, sort_by, order) => {
  return axios
    .get("http://nc-news-iffa.herokuapp.com/api/articles", {
      params: { topic: topic_slug, sort_by, order }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getSingleArticle = article_id => {
  return axios
    .get(`http://nc-news-iffa.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getCommentsByArticleId = article_id => {
  return axios
    .get(
      `http://nc-news-iffa.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getTopics = () => {
  return axios
    .get("http://nc-news-iffa.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const postComment = (article_id, body, username) => {
  return axios
    .post(
      `http://nc-news-iffa.herokuapp.com/api/articles/${article_id}/comments`,
      { username, body }
    )
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const patchArticleVotes = (article_id, newVote) => {
  return axios
    .patch(`http://nc-news-iffa.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: newVote
    })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const patchCommentVotes = (comment_id, newVote) => {
  return axios
    .patch(`http://nc-news-iffa.herokuapp.com/api/comments/${comment_id}`, {
      inc_votes: newVote
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return axios.delete(
    `http://nc-news-iffa.herokuapp.com/api/comments/${comment_id}`
  );
};

/*
axios.get('/data', {
  params: {
    ID: 12345,
    all_data: true,
  },
});

will evalutate to:
data?ID=12345&all_data=true
*/
