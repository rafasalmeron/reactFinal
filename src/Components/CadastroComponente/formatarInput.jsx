export const formatarCep = (value) => {
    return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})$/, '$1-$2').slice(0, 9);
};

export const formatarCpf = (value) => {
    return value.replace(/\D/g, '')
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
        .slice(0, 14);
};

export const formatarTelefone = (value) => {
    return value.replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2')
        .slice(0, 15);
};