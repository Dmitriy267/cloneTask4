export type CardProps = {
    card: {
        url: string;
    };
    index: number;
    isActive: any;
    onClick: (index: number) => number;
    isFlip: any;
};
