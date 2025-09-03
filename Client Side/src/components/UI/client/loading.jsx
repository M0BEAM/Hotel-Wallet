const Loading = () => {
    return (
        <div class='flex space-x-2 justify-center items-center h-8  dark:invert'>
            <span class='sr-only'>Loading...</span>
            <div class='size-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='size-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='size-4 bg-white rounded-full animate-bounce'></div>
        </div>
    );
}

export default Loading;