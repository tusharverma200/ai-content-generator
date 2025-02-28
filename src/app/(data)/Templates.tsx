export default [
    {
        name:'Blog Title',
        desc:'An AI tool that generates blog titles based on your blog topic.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1674/1674660.png',
        aiPrompt:'Give me 5 blog title ideas about {topic}',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An AI tool that generates blog content based on your topic.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/9836/9836465.png',
        aiPrompt:'Write a detailed blog post about {topic}',
        slug:'generate-blog-content',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'An AI tool that generates blog topic ideas based on your topic.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt:'Give me 10 blog topic ideas about {topic} in less than 1000 words',
        slug:'generate-blog-topics',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'YouTube SEO Title',
        desc:'An AI tool that generates SEO-friendly YouTube titles.',
        category:'YouTube',
        icon:'https://cdn-icons-png.flaticon.com/128/400/400426.png',
        aiPrompt:'Generate 5 SEO-friendly YouTube titles for {topic}',
        slug:'generate-youtube-title',
        form:[
            {
                label:'Enter your video topic',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'YouTube Description',
        desc:'An AI tool that generates compelling YouTube video descriptions.',
        category:'YouTube',
        icon:'https://cdn-icons-png.flaticon.com/128/10101/10101391.png',
        aiPrompt:'Write a YouTube video description for {topic} in less than 1000 words',
        slug:'generate-youtube-description',
        form:[
            {
                label:'Enter your video topic',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'YouTube Tags',
        desc:'An AI tool that generates SEO-friendly YouTube tags.',
        category:'YouTube',
        icon:'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
        aiPrompt:'Generate YouTube tags for {topic} in less than 1000 words',
        slug:'generate-youtube-tags',
        form:[
            {
                label:'Enter your video topic',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    },
    {
        name:'Rewrite Articles (Plagiarism Free)',
        desc:'An AI tool that rewrites articles while ensuring they remain plagiarism-free.',
        category:'Writing',
        icon:'https://cdn-icons-png.flaticon.com/128/2680/2680919.png',
        aiPrompt:'Rewrite the following text to be plagiarism-free: {text} in less than 1000 words',
        slug:'rewrite-article',
        form:[
            {
                label:'Enter your text',
                field:'textarea',
                name:'text',
                required:true
            }
        ]
    },
    {
        name:'Text Improver',
        desc:'An AI tool that enhances and improves text readability and engagement.',
        category:'Writing',
        icon:'https://cdn-icons-png.flaticon.com/128/4021/4021693.png',
        aiPrompt:'Improve the following text for better readability: {text} in less than 1000 words',
        slug:'text-improver',
        form:[
            {
                label:'Enter your text',
                field:'textarea',
                name:'text',
                required:true
            }
        ]
    },
    {
        name:'Add Emojis to Text',
        desc:'An AI tool that enhances your text with relevant emojis.',
        category:'Writing',
        icon:'https://cdn-icons-png.flaticon.com/128/10851/10851235.png',
        aiPrompt:'Add relevant emojis to the following text: {text} in less than 1000 words',
        slug:'add-emojis-text',
        form:[
            {
                label:'Enter your text',
                field:'textarea',
                name:'text',
                required:true
            }
        ]
    },
    {
        name:'Instagram Post Generator',
        desc:'An AI tool that generates engaging Instagram post captions.',
        category:'Social Media',
        icon:'https://cdn-icons-png.flaticon.com/128/1384/1384063.png',
        aiPrompt:'Generate an engaging Instagram caption for {topic} in less than 1000 words',
        slug:'generate-instagram-post',
        form:[
            {
                label:'Enter your post topic',
                field:'input',
                name:'topic',
                required:true
            }
        ]
    }
];
