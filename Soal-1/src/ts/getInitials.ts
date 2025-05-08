function getInitials(fullName: string): string {
    const names: string[] = fullName.split(" ");
    return names.map((name: string) => name.charAt(0).toUpperCase()).join("");
}

export { getInitials };