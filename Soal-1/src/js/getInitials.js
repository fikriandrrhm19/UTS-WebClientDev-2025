function getInitials(fullName) {
    const names = fullName.split(" ");
    return names.map(name => name.charAt(0).toUpperCase()).join("");
}

export { getInitials };