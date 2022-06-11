<script context="module">
    export async function load({ params }) {
        try{
            const Post = await import(`../../posts/${params.slug}.md`);

            return {
                props: {
                //props are data that is passed to the component
                Post: Post.default
                }
            };

        } catch(e){
            // for status to work we need the correct outputs
            // 404 needs error message and redirects
            // needs status code and redirect
            return {
                status: 404,
                error: "Post not found"
            }
        };
    }

</script>

<script>
    export let Post;
</script>

<svelte:component this={Post} />
