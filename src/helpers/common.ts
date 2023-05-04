export const splitSummaryIntoParagraphs = (summary: string): string[] => {
    const paragraphs = summary.split('\n');
    return paragraphs;
}
