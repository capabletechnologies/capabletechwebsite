const { connect } = require("http2");

module.exports = [
    {
      id: 1,
      originalUrl: "https://example.com/documents",
      shortUrl: "short2",
      clickCount: 0,
      name: "My Documents",
      user: {
        connect: { id: 1 },
      },
    },
    /* {
      id: 2,
      originalUrl: "https://example.com/photos",
      shortUrl: "short2",
      clickCount: 0,
    },
    {
      id: 3,
      originalUrl: "https://example.com/videos",
      shortUrl: "short3",
      clickCount: 0,
    }, */
]