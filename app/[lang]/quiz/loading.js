import Skeleton from 'react-loading-skeleton';

const Loading = ({ count }) => {
    // You can add any UI inside Loading, including a Skeleton.
    return <Skeleton
            direction="rtl"
            duration={3}
            className="my-2 bg-zinc-600"
            count={count}
            baseColor="#5e5e5e"
            highlightColor="#5e5e5e"
        />
}

export default Loading;